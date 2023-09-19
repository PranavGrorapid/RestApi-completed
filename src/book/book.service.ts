import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import mongoose from 'mongoose';
import { Book } from 'src/schemas/Book.schema';
import { createBookDto } from './dtos/createBookDto';


@Injectable()
export class BookService {
  constructor(
    @InjectModel('book')
    private bookModel: mongoose.Model<Book>,
  ) {}

  async FindAll(): Promise<Book[]> {
      const allBooks = await this.bookModel.find();
      
       console.log('allBooks',allBooks)

    return allBooks;
  }
    
    async Create(newbook):Promise<Book> {
        
        const newBook = await this.bookModel.create(newbook)
        
        return newBook
    }
  
  async FindBookById(id:string):Promise<Book> {
    
    const bookDetails = await this.bookModel.findById(id)
    
    return bookDetails
  }



  async updateBookById(id:string,book:createBookDto){
    
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators:true
    })
    
    return updatedBook
  }


  async deleteBookById(id:string):Promise<Book> {
       
    return this.bookModel.findByIdAndRemove(id)
    
  }

}
