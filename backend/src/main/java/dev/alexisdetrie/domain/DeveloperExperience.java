package dev.alexisdetrie.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

/**
 * Entity : represents a developer experience
 *
 * @author Alexis
 * @since 1.0.0
 */
@Getter
@ToString
@NoArgsConstructor
public class DeveloperExperience extends Experience {

    @Builder
    public DeveloperExperience(String id, String jobTitle, String company, String icon, LocalDate startDate, LocalDate endDate, List<ExperienceItem> experienceItems) {
        super(id, jobTitle, company, icon, startDate, endDate, experienceItems);
    }
}
