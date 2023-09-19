import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule} from '@nestjs/mongoose'
import { BookSchema } from 'src/schemas/Book.schema';


@Module({

  imports: [
    MongooseModule.forFeature([{
      name: 'book',
      schema:BookSchema
    }])
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
