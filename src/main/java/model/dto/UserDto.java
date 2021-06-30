package model.dto;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;

import model.User;


public class UserDto{
	
	private Long id;
	
	private String name;
	
	private String email;
	
	private String password;
	
	private List<PhoneDto> phones = new ArrayList<>();
	
	public UserDto() {
		
	}
	
	public UserDto(Long id, String name, String email, String password, List<PhoneDto> phones) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phones = phones;
	}
	
	public static List<UserDto> toModelList(List<User> userList){
		ModelMapper modelMapper = new ModelMapper();
		List<UserDto> listDto = new ArrayList<>();
		for (User user : userList) {
			UserDto dto = modelMapper.map(user, UserDto.class);
			listDto.add(dto);
		}
		return listDto;
		
	}
	
	public static UserDto toModel(User user){
		ModelMapper modelMapper = new ModelMapper();
		UserDto dto = modelMapper.map(user, UserDto.class);
		return dto;
		
	}


	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<PhoneDto> getPhones() {
		return phones;
	}

	public void setPhones(List<PhoneDto> phones) {
		this.phones = phones;
	}
	
	
	
	
}

