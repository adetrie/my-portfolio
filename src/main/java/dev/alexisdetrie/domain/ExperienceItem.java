
package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity : represents experience details
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class ExperienceItem extends PanacheMongoEntity {
    @Getter @Setter
    private String company;

    @Getter @Setter
    private String description;

    @Getter @Setter
    private String icon;
}