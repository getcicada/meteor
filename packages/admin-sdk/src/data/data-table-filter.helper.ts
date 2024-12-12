import Criteria from './Criteria';
import { type Filter } from '@cicada-ag/meteor-component-library';

export function addDataTableFilters(
  criteria: Criteria,
  filters: Filter[]
): Criteria {
  filters.forEach((filter) => {
    filter.type.options.forEach((option) => {
      criteria.addFilter(Criteria.equals(filter.id, option.id));
    });
  });

  return criteria;
}
