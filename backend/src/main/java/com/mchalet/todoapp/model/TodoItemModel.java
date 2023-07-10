package com.mchalet.todoapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "TODOS")
public class TodoItemModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String todo;
    
    @ManyToOne
    @JoinColumn(name="todo_list_id", nullable=false)
	TodoListModel todoList;
}
