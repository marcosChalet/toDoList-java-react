package com.mchalet.todoapp.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mchalet.todoapp.dtos.TodoItemRecordDTO;
import com.mchalet.todoapp.model.TodoItemModel;
import com.mchalet.todoapp.repositories.TodoItemRepository;

import jakarta.validation.Valid;

@Service
public class TodoItemService {
	
	@Autowired
	TodoItemRepository todoItemRepository;

	public ResponseEntity<TodoItemModel> saveTodo(@Valid TodoItemRecordDTO todoRecordDTO) {
		var todoItemModel = new TodoItemModel();
		BeanUtils.copyProperties(todoRecordDTO, todoItemModel);
		return ResponseEntity.status(HttpStatus.OK).body(todoItemRepository.save(todoItemModel));
	}

}
