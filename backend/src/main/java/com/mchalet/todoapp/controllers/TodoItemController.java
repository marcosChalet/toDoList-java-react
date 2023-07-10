package com.mchalet.todoapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mchalet.todoapp.dtos.TodoItemRecordDTO;
import com.mchalet.todoapp.model.TodoItemModel;
import com.mchalet.todoapp.service.TodoItemService;

import jakarta.validation.Valid;

@RestController
public class TodoItemController {

	@Autowired
	TodoItemService todoItemService;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/lists/todos")
	public ResponseEntity<TodoItemModel> saveTodo(@RequestBody @Valid TodoItemRecordDTO todoRecordDTO) {
		return todoItemService.saveTodo(todoRecordDTO);
	}
	
}
