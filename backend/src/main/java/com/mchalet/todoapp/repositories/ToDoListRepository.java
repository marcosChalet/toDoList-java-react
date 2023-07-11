package com.mchalet.todoapp.repositories;

import com.mchalet.todoapp.model.ToDoListModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoListRepository extends JpaRepository<ToDoListModel, Integer> { }
