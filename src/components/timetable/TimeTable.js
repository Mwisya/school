import React from 'react'
import LifeAtCastleRock from '../explore/LifeAtCastleRock'
import './timetable.css'

const timeTable = () => {
    return (
    <main className='layout about-main'>
      <aside className='layout-aside'>
        <LifeAtCastleRock/>
      </aside>
      <div className='layout-data castle-life-wrapper'>
        <div className='castle-life-info'>
            <p className='castle-life-info-p'>Life at Castle Rock</p>
            <article>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde commodi, veritatis repellat expedita rerum vero aspernatur! Voluptatibus dolore aperiam odio totam a vero ipsam, distinctio doloribus porro ipsa enim.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio quod esse sunt, architecto laboriosam voluptatum. Ipsa provident quis cumque asperiores adipisci ab eveniet distinctio ipsam illo culpa minus voluptatem, aut, doloribus suscipit numquam amet nisi quia modi illum praesentium! Atque possimus suscipit voluptate ducimus odio necessitatibus consectetur in minima consequatur neque, et doloremque laboriosam fugiat impedit modi quae quisquam.</p>
            </article>
        </div>
        <table>
            <thead className='table-head'>
                <td>Time</td>
                <td>Events</td>
            </thead>
            <tbody className='table-body'>
                <tr>
                    <td>7:00am</td>
                    <td>Breakfast</td>
                </tr>
                <tr>
                    <td>7:45am</td>
                    <td>Roll Call and Morning Prayers</td>
                </tr>
                <tr>
                    <td>8:00am</td>
                    <td>Tutorials</td>
                </tr>
                <tr>
                    <td>8:20am</td>
                    <td>Lessons 1, 2 & 3</td>
                </tr>
                <tr  className='break'>
                    <td>10:30am</td>
                    <td>Break</td>
                </tr>
                <tr>
                    <td>10:50am</td>
                    <td>Lessons 4,5 & 6</td>
                </tr>
                <tr className='break'>
                    <td>1:00pm</td>
                    <td>1st Break</td>
                </tr>
                <tr>
                    <td>1:45</td>
                    <td>Activities</td>
                </tr>
                <tr>
                    <td>2:30pm</td>
                    <td>Lessons 7 & 8</td>
                </tr>
                <tr className='break'>
                    <td>3:55pm</td>
                    <td>Break</td>
                </tr>
                <tr >
                    <td>4:15pm</td>
                    <td>Activites</td>
                </tr>
                <tr>
                    <td>6:30</td>
                    <td>Supper</td>
                </tr>
                <tr>
                    <td>7:00pm</td>
                    <td>Roll Call for All Students</td>
                </tr>
            </tbody>
        </table>
      </div>
    </main>
    )
}

export default timeTable
