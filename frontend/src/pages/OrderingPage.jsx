import React from "react";


export default function OrderingPage() {
    return (
        <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="radio"></input>
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="radio"></input>
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"></input>
        </label>
      </form>
    );
    
}
