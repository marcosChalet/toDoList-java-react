package com.mchalet.todoapp.service;

import com.mchalet.todoapp.model.ToDoListModel;
import com.mchalet.todoapp.repositories.ToDoListRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mchalet.todoapp.dtos.ToDoItemRecordDTO;
import com.mchalet.todoapp.model.ToDoItemModel;
import com.mchalet.todoapp.repositories.ToDoItemRepository;

import jakarta.validation.Valid;

import java.util.Optional;
import java.util.UUID;

@Service
public class ToDoItemService {
	
	@Autowired
	ToDoItemRepository toDoItemRepository;
	@Autowired
	ToDoListRepository toDoListRepository;

	public ResponseEntity<Object> insertToDo(Integer id, ToDoItemRecordDTO toDoItemRecordDTO) {
		Optional<ToDoListModel> toDoList = toDoListRepository.findById(id);

		if (toDoList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("To-Do List not found.");
		}

		var toDoItem = new ToDoItemModel();
		BeanUtils.copyProperties(toDoItemRecordDTO, toDoItem);
		toDoList.get().getToDos().add(toDoItem);
		return ResponseEntity.status(HttpStatus.OK).body(toDoListRepository.save(toDoList.get()));
	}

	public ResponseEntity<Object> updateToDo(UUID id, ToDoItemRecordDTO todoItemRecordDTO) {
		Optional<ToDoItemModel> oldToDo = toDoItemRepository.findById(id);

		if (oldToDo.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("To-Do not found");
		}

		var todoModel = oldToDo.get();
		BeanUtils.copyProperties(todoItemRecordDTO, todoModel);
		return ResponseEntity.status(HttpStatus.OK).body(toDoItemRepository.save(todoModel));
	}

	public ResponseEntity<String> removeToDo(UUID id) {
		Optional<ToDoItemModel> todo = toDoItemRepository.findById(id);

		if (todo.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
		}

		toDoItemRepository.delete(todo.get());
		return ResponseEntity.status(HttpStatus.OK).body("To-Do deleted successfully.");
	}
}
