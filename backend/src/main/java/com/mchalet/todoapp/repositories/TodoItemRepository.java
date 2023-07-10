package com.mchalet.todoapp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mchalet.todoapp.model.TodoItemModel;

@Repository
public interface TodoItemRepository extends JpaRepository<TodoItemModel, UUID> { }
