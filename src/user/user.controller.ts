import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud } from '@nestjsx/crud';
import { User } from './user.entity';

@Crud({
  model: {
    type: User,
  },
  params: {
    user_id: {
      field: 'user_id',
      primary: true,
      type: 'number'
    }
  }
})
@Controller('users')
export class UserController {
  constructor(public readonly service: UserService) { }
}
