package com.mchalet.todoapp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mchalet.todoapp.model.ToDoItemModel;

@Repository
public interface ToDoItemRepository extends JpaRepository<ToDoItemModel, UUID> { }
