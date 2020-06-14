import { Field, InputType } from '@nestjs/graphql';
import { OrderByArg } from 'src/enums/OrderByArg';

@InputType({
  isAbstract: true,
  description: undefined
})
export class EntityVersionOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  versionNumber?: keyof typeof OrderByArg | null;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  label?: keyof typeof OrderByArg | null;
}
