package com.mchalet.todoapp.repositories;

import com.mchalet.todoapp.model.TodoListModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoListRepository extends JpaRepository<TodoListModel, Integer> { }
