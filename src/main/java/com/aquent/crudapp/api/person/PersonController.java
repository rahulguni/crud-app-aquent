package com.aquent.crudapp.api.person;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import com.aquent.crudapp.model.person.Person;
import com.aquent.crudapp.service.person.PersonService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for handling basic person management operations.
 */
@RestController
@RequestMapping("person")
@CrossOrigin
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    /**
     * Renders the listing page.
     *
     * @return list view populated with the current list of people
     */
    @GetMapping(value = "list")
    public List<Person> list() {
        return personService.listPeople();
    }

    /**
     * Validates and saves a new person.
     * On success, the user is redirected to the listing page.
     * On failure, the form is redisplayed with the validation errors.
     *
     * @param person populated form bean for the person
     * @return redirect, or create view with errors
     */
    @PostMapping(value = "create")
    public List<String> create(@RequestBody Person person) {
        List<String> errors = personService.validatePerson(person);
        if (errors.isEmpty()) {
            personService.createPerson(person);
            List<String> successList = new ArrayList<>();
            successList.add(person.toString());
            return successList;
        }
        return errors;
    }

    /**
     * Renders an edit form for an existing person record.
     *
     * @param personId the ID of the person to edit
     * @return edit view populated from the person record
     */
//    @GetMapping(value = "edit/{personId}")
//    public ModelAndView edit(@PathVariable Integer personId) {
//        ModelAndView mav = new ModelAndView("person/edit");
//        mav.addObject("person", personService.readPerson(personId));
//        mav.addObject("errors", new ArrayList<String>());
//        return mav;
//    }

    /**
     * Validates and saves an edited person.
     * On success, the user is redirected to the listing page.
     * On failure, the form is redisplayed with the validation errors.
     *
     * @param person populated form bean for the person
     * @return redirect, or edit view with errors
     */
    @PutMapping(value = "edit")
    public List<String> edit(@RequestBody Person person) {
        List<String> errors = personService.validatePerson(person);
        if (errors.isEmpty()) {
            personService.updatePerson(person);
            List<String> successList = new ArrayList<>();
            successList.add(person.toString());
            return successList;
        }
        return errors;
    }

    /**
     * Handles person deletion or cancellation, redirecting to the listing page in either case.
     *
     * @param personId the ID of the person to be deleted
     * @return redirect to the listing page
     */
    @DeleteMapping(value = "delete")
    public boolean delete(@RequestParam Integer personId) {
        try {
            personService.deletePerson(personId);
            return true;
        }
        catch(NoSuchElementException exp) {
            return false;
        }
    }
}
