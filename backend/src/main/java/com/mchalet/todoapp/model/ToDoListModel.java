package com.mchalet.todoapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "TODO_LISTS")
public class ToDoListModel extends RepresentationModel<ToDoListModel>  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer toDoType;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "todo_list_tags_id")
    private List<TagModel> tags;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "todo_list_id")
    private List<ToDoItemModel> toDos;
}
