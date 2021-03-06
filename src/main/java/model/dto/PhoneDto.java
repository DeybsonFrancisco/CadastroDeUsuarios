package model.dto;

import org.modelmapper.ModelMapper;

import model.Phone;

public class PhoneDto {

	private Long id;

	private int ddd;

	private String number;

	private String type;
	
	public PhoneDto() {
		
	}

	public PhoneDto(Long id, int ddd, String number, String type) {
		super();
		this.id = id;
		this.ddd = ddd;
		this.number = number;
		this.type = type;
	}
	
	public static PhoneDto toModel(Phone phone){
		ModelMapper modelMapper = new ModelMapper();
		PhoneDto dto = modelMapper.map(phone, PhoneDto.class);
		return dto;
		
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getDdd() {
		return ddd;
	}

	public void setDdd(int ddd) {
		this.ddd = ddd;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
