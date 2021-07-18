import React from 'react';
import data from '../show_timetable.json';

// data.forEach(d => forEachData += `<li>${d.name}</li>`)
const classes = data.classes
const {Monday, Tuesday, Wednesday, Thursday, Friday} = data.Allocations
const hours = ["8", "9", "10", "11", "12", "1", "3", "4", "5", "6"]
console.log(Monday[0]);



const TimeTable = () => {
    const itemsTues = [];
    const itemsMon = [];
    const itemsWed = [];
    const itemsThur = [];
    const itemsFri = [];
    for (let i = 0; i < hours.length; i++) {
      itemsMon.push(<tr></tr>);
      itemsMon.push(
        <td class="border text-left px-8 py-4">{hours[i] + ":00"}</td>
      );
      for (let j = 0; j < Monday[0].length; j++) {
        if (Monday[i][j] === null) {
          itemsMon.push(<td class="border text-left px-8 py-4"></td>);
        } else {
          itemsMon.push(<td class="border text-left px-8 py-4">{classes["_"+`${Monday[i][j]}`]}</td>);
        }
      }
    }
    for (let i = 0; i < hours.length; i++) {
      itemsTues.push(<tr></tr>);
      itemsTues.push(
        <td class="border text-left px-8 py-4">{hours[i] + ":00"}</td>
      );
      for (let j = 0; j < Tuesday[0].length; j++) {
        if (Tuesday[i][j] === null) {
          itemsTues.push(<td class="border text-left px-8 py-4"></td>);
        } else {
          itemsTues.push(<td class="border text-left px-8 py-4">{classes["_"+`${Tuesday[i][j]}`]}</td>);
        }
      }
    }
    for (let i = 0; i < hours.length; i++) {
      itemsWed.push(<tr></tr>);
      itemsWed.push(
        <td class="border text-left px-8 py-4">{hours[i] + ":00"}</td>
      );
      for (let j = 0; j < Wednesday[0].length; j++) {
        if (Wednesday[i][j] === null) {
          itemsWed.push(<td class="border text-left px-8 py-4"></td>);
        } else {
          itemsWed.push(<td class="border text-left px-8 py-4">{classes["_"+`${Wednesday[i][j]}`]}</td>);
        }
      }
    }
    for (let i = 0; i < hours.length; i++) {
      itemsThur.push(<tr></tr>);
      itemsThur.push(
        <td class="border text-left px-8 py-4">{hours[i] + ":00"}</td>
      );
      for (let j = 0; j < Thursday[0].length; j++) {
        if (Thursday[i][j] === null) {
          itemsThur.push(<td class="border text-left px-8 py-4"></td>);
        } else {
          itemsThur.push(<td class="border text-left px-8 py-4">{classes["_"+`${Thursday[i][j]}`]}</td>);
        }
      }
    }
    for (let i = 0; i < hours.length; i++) {
      itemsFri.push(<tr></tr>);
      itemsFri.push(
        <td class="border text-left px-8 py-4">{hours[i] + ":00"}</td>
      );
      for (let j = 0; j < Friday[0].length; j++) {
        if (Friday[i][j] === null) {
          itemsFri.push(<td class="border text-left px-8 py-4"></td>);
        } else {
          itemsFri.push(<td class="border text-left px-8 py-4">{classes["_"+`${Friday[i][j]}`]}</td>);
        }
      }
    }

    return (
      <React.Fragment>
        <div className="mx-16">
          <h1 className="font-medium text-3xl m-8">Monday</h1>
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <td className="bg-purple-100 border text-left px-8 py-4">
                  Time
                </td>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Computer Lab
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 107
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 201
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 204
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 306
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 308
                </th>
              </tr>
            </thead>
            <tbody>

            
                  {itemsMon}
                
            </tbody>
          </table>
          <h1 className="font-medium text-3xl m-8">Tuesday</h1>
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <td className="bg-purple-100 border text-left px-8 py-4">
                  Time
                </td>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Computer Lab
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 107
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 201
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 204
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 306
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 308
                </th>
              </tr>
            </thead>
            <tbody>

                  {itemsTues}
                
            </tbody>
          </table>
          <h1 className="font-medium text-3xl m-8">Wednesday</h1>
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <td className="bg-purple-100 border text-left px-8 py-4">
                  Time
                </td>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Computer Lab
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 107
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 201
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 204
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 306
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 308
                </th>
              </tr>
            </thead>
            <tbody>

                  {itemsWed}
                
            </tbody>
          </table>
          <h1 className="font-medium text-3xl m-8">Thursday</h1>
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <td className="bg-purple-100 border text-left px-8 py-4">
                  Time
                </td>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Computer Lab
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 107
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 201
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 204
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 306
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 308
                </th>
              </tr>
            </thead>
            <tbody>

                  {itemsThur}
                
            </tbody>
          </table>
          <h1 className="font-medium text-3xl m-8">Friday</h1>
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <td className="bg-purple-100 border text-left px-8 py-4">
                  Time
                </td>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Computer Lab
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 107
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 201
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 204
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 306
                </th>
                <th className="bg-green-100 border text-left px-8 py-4">
                  Hall 308
                </th>
              </tr>
            </thead>
            <tbody>

                  {itemsFri}
                
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
}
 
export default TimeTable;