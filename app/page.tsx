"use client";
import { useState } from 'react';
import { storage } from '../firebase';
import { Button, Badge, Container, Typography, Grid, Paper } from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import 'tailwindcss/tailwind.css';

const dummyItems = [
  { id: '1', name: 'Rice', price: 5.00, quantity: 10, img: '/images/rice.svg' },
  { id: '2', name: 'Beans', price: 3.00, quantity: 15, img: '/images/beans.svg' },
  // Add more items
];

export default function Home() {
  const [inventory, setInventory] = useState<any[]>([]);

  const handleDrop = (item: any) => {
    setInventory([...inventory, item]);
  };

  const totalCost = inventory.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="lg" className="bg-bg min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h4" component="h1" className="mb-4 text-primary">My Inventory</Typography>
      <Badge badgeContent={`$${totalCost.toFixed(2)}`} color="primary" className="mb-4" />
      <Droppable droppableId="inventory" direction="horizontal">
        {(provided) => (
          <Paper className="w-full max-w-4xl mx-auto rounded-xl p-4 bg-white shadow-lg" ref={provided.innerRef} {...provided.droppableProps}>
            <Typography variant="h6" component="h2">Inventory</Typography>
            <Grid container spacing={2} className="mt-4">
              {inventory.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <Grid item xs={12} md={4} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Paper className="p-4 bg-primary text-white rounded-md">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography>Price: ${item.price.toFixed(2)}</Typography>
                        <Typography>Quantity: {item.quantity}</Typography>
                      </Paper>
                    </Grid>
                  )}
                </Draggable>
              ))}
            </Grid>
          </Paper>
        )}
      </Droppable>
      <Droppable droppableId="popular-items">
        {(provided) => (
          <Paper className="w-full max-w-4xl mx-auto rounded-xl p-4 bg-white shadow-lg mt-8" ref={provided.innerRef} {...provided.droppableProps}>
            <Typography variant="h6" component="h2">Popular Pantry Items</Typography>
            <Grid container spacing={2} className="mt-4">
              {dummyItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <Grid item xs={12} md={3} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Paper className="p-4 bg-secondary text-white rounded-md cursor-pointer" onClick={() => handleDrop(item)}>
                        <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
                        <Typography variant="body1">{item.name}</Typography>
                      </Paper>
                    </Grid>
                  )}
                </Draggable>
              ))}
            </Grid>
          </Paper>
        )}
      </Droppable>
    </Container>
  );
}
