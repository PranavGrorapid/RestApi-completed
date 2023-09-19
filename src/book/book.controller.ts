import { Controller, Get, Post, Body, Param, Put,Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { createBookDto } from './dtos/createBookDto';
import { Book } from 'src/schemas/Book.schema';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async FindAllBooks(): Promise<Book[]> {
    return this.bookService.FindAll();
  }

  @Post()
  async createBook(@Body() body: createBookDto): Promise<Book> {
    return this.bookService.Create(body);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.FindBookById(id);
  }

  @Put(':id')
  async updateBookById(@Param('id') id: string, @Body() body: createBookDto) {
    return this.bookService.updateBookById(id, body);
  }
    
    @Delete(':id')

    async deleteBookbyId(@Param('id') id:string):Promise<Book> {
        
        return this.bookService.deleteBookById(id)
    }
}
