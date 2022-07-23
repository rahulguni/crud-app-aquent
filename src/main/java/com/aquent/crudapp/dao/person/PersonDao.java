package com.aquent.crudapp.dao.person;

import java.util.List;

import com.aquent.crudapp.model.person.Person;
import org.springframework.stereotype.Repository;

/**
 * Operations on the "person" table.
 */
@Repository
public interface PersonDao {

    /**
     * Retrieves all of the person records.
     *
     * @return list of person records
     */
    List<Person> listPeople();

    List<Person> listPeopleOfClient(Integer clientId);

    List<Person> listPeopleWithNoClients();

    int addClientFromPersonId(Integer personId, Integer clientId);

    int deletePersonClientFromId(Integer personId);
    /**
     * Creates a new person record.
     *
     * @param person the values to save
     * @return the new person ID
     */
    Integer createPerson(Person person);

    /**
     * Retrieves a person record by ID.
     *
     * @param id the person ID
     * @return the person record
     */
    Person readPerson(Integer id);

    /**
     * Updates an existing person record.
     *
     * @param person the new values to save
     */
    void updatePerson(Person person);

    /**
     * Deletes a person record by ID.
     *
     * @param id the person ID
     */
    void deletePerson(Integer id);

}
