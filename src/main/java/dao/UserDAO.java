package dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import exception.UserException;
import model.Phone;
import model.User;

public class UserDAO {

	private static UserDAO instance;
	private EntityManagerFactory emf;
	private EntityManager em;

	public static UserDAO getInstance() {
		if (instance == null) {
			instance = new UserDAO();
			return instance;
		}
		return instance;
	}

	private UserDAO() {
		this.emf = Persistence.createEntityManagerFactory("User");
	}

	public List<User> findAll() {
		em = emf.createEntityManager();
		String jpql = "select u from User u";
		TypedQuery<User> query = em.createQuery(jpql, User.class);
		List<User> list = query.getResultList();
		em.close();
		return list;
	}

	public Optional<User> findById(Long id) {
		em = emf.createEntityManager();
		User user = em.find(User.class, id);
		em.close();
		return Optional.ofNullable(user);
	}

	public User create(User user) throws UserException {
		em = emf.createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(user);
			em.getTransaction().commit();
			em.close();
			return user;

		} catch (Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new UserException("Ocorreu um erro ao salvar usuário");
		}
	}

	public void update(User user, Long id) throws UserException {
		em = emf.createEntityManager();

		try {
			user.setId(id);
			em.getTransaction().begin();
			em.merge(user);
			em.getTransaction().commit();
			em.close();

		} catch (Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new UserException("Ocorreu um erro ao alterar usuário");
		}
	}

	public void remove(Long id) throws UserException {

		em = emf.createEntityManager();
		User user = em.find(User.class, id);
		if (user != null) {
			try {
				em.getTransaction().begin();
				em.remove(user);
				em.getTransaction().commit();
				em.close();

			} catch (Exception e) {
				e.printStackTrace();
				em.getTransaction().rollback();
				throw new UserException("Erro ao remover usuário");
			}
		}
	}

	public Phone addUserPhone(Phone phone, Long userId) throws UserException {
		em = emf.createEntityManager();
		try {
			User user = em.find(User.class, userId);
			phone.setUser(user);
			em.getTransaction().begin();
			em.persist(phone);
			em.getTransaction().commit();
			em.close();
	
			return phone;
			
		}catch(Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new UserException("Erro ao add usuário");
		}
		
	}

	
	public void removeUserPhone(Long id) throws UserException {

		em = emf.createEntityManager();
		Phone phone = em.find(Phone.class, id);
		
		if (phone != null) {
			System.out.println(phone.getUser().getPhones());
			try {
				User user = phone.getUser();
				List<Phone> list = user.getPhones();
				for (int i= 0;  i < list.size(); i++) {
					Phone p = list.get(i);
					if(p.getId() == phone.getId()) {
						list.remove(i);
					}
					
				}
				user.setPhones(list);
				em.getTransaction().begin();
				em.remove(phone);
				em.merge(user);
				em.flush();
				em.getTransaction().commit();
				em.close();

			} catch (Exception e) {
				e.printStackTrace();
				em.getTransaction().rollback();
				throw new UserException("Erro ao remover telefone do usuário");
			}
		}
	}
	
	public User login(String email, String password) throws UserException {
		em = emf.createEntityManager();
		String jpql = "select u from User u where u.email ='" + email +"'";
		TypedQuery<User> query = em.createQuery(jpql, User.class);
		User user = query.getSingleResult();
		em.close();
		if(password.equals(user.getPassword())) {
			return user;
		}
		throw new UserException("Email ou password incorretos");
	}
	
}
