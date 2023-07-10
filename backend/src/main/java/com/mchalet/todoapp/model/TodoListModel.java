package com.mchalet.todoapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "TODO_LISTS")
public class TodoListModel extends RepresentationModel<TodoListModel>  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;

    @OneToMany(mappedBy="todo_list")
    private Set<TodoItemModel> todos;
}
