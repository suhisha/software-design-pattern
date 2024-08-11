package com.max.quizspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.quizspring.model.ContactForm;
import com.max.quizspring.repo.ContactFormRepository;

@Service
public class ContactFormService {

     @Autowired
    private ContactFormRepository repository;

    public ContactForm saveContactForm(ContactForm form) {
       
        return repository.save(form);
    }
    public  List<ContactForm> getContactinfo() {
       
        return repository.findAll();
    }
}
