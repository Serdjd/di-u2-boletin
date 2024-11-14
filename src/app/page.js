"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Greeting from "./Greeting";
import Card from "./Card";
import Counter from "./counter";
import Counter2 from "./Counter2"
import ProductList from "./ProductList";
import { persons, shops, opciones } from "./Data";
import UserCard from "./UserCard";
import Parent, { Children } from "./Parent";
import ToogleSwitch from "./ToogleSwitch";
import ToDoList from "./ToDoList";
import LoginControl from "./LoginControl";
import ProductStock from "./ProductStock";
import ContactForm from "./ContactForm";
import ShoppingList from "./ShoppingList";
import DropDown from "./DropDown";
import ImageList from "./ImageGallery";
export default function Home() {
  let cards = []
  for (let index = 0; index < 5; index++) {
    cards.push(
      <Card 
      nombre={"Mona Lisa"} 
      descripcion={"Es muy bonita"} 
      imagen={"data:image/jpeg;base64,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"}
      key={index}
    />
    )
  }
  let users = persons.map(
    (person) => (<UserCard person={person} key={person.id}/>)
  )
  return (
    <>
      <Greeting name={"Pepe"}/>
      <ProductList/>
      <Counter/>
      {cards}
      <div>
        {users}
      </div>
      <Parent text={"Hello"}>
        <Children/>
      </Parent>
      <ToogleSwitch/>
      <ToDoList/>
      <Counter2/>
      <LoginControl log={false}/>
      <ProductStock name={'Ron'} inStock={false}/>
      <ContactForm/>
      <ShoppingList products={shops}/>
      <DropDown opciones={opciones}/>
      <br/>
      <ImageList/>
    </>
  );
}
