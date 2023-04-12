import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";

function Header(){

    return(
    <Stack className = "mb-4" direction="horizontal" gap="3"> 
      <h1 className="me-auto">
        MyBudget Tracker
      </h1>
      <Button className="btn btn-primary">
        Add Budget
      </Button>
      <Button variant="outline-primary">
        Add Expense
      </Button>
      </Stack> 
    )
}

export {Header}