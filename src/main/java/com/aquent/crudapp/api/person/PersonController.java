package com.aquent.crudapp.api.person;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import com.aquent.crudapp.model.person.Person;
import com.aquent.crudapp.service.person.PersonService;
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
     * Sends all list of people.
     *
     * @return list of people
     */
    @GetMapping(value = "list")
    public List<Person> list() {
        return personService.listPeople();
    }

    /**
     * Validates and saves a new person.
     * On success, the person name is sent.
     * On failure, the validation errors are sent.
     *
     * @param person populated form bean for the person
     * @return person name as a single-element list to check in frontend.
     */
    @PostMapping(value = "create")
    public List<String> create(@RequestBody Person person) {
        List<String> errors = personService.validatePerson(person);
        if (errors.isEmpty()) {
            String personID = personService.createPerson(person).toString();
            List<String> successList = new ArrayList<>();
            successList.add(personID);
            return successList;
        }
        return errors;
    }

    /**
     * Validates and saves an edited person.
     * On success, the person name is sent
     * On failure, the validation errors are sent
     *
     * @param person populated form bean for the person
     * @return person name as a single-element list to check in frontend.
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
     * Handles person deletion
     *
     * @param personId the ID of the person to be deleted
     * @return true if success, else false
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
