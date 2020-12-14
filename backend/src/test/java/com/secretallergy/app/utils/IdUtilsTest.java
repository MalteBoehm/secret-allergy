package com.secretallergy.app.utils;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class IdUtilsTest {
    private final IdUtils idUtils = new IdUtils();

    @Test
    @DisplayName("ID has always the length of 36 characters")
    void generateIdHasLengthOf36() {
        //GIVEN
        int expectedLength = 36;

        //WHEN
        int actualLength = idUtils.generateId().length();

        //THEN
        assertThat(actualLength, is(expectedLength));
    }

    @Test
    @DisplayName("Each generated ID is different")
    void generateIdIsDifferentToGeneratedIdBefore() {
        //WHEN
        String firstID = idUtils.generateId();
        String secondID = idUtils.generateId();
        //THEN
        assertThat(firstID, not(is(secondID)));
    }
}
