import { RxAccessibility, RxRocket, RxPerson } from "react-icons/rx";

export default function HomeCards() {
    return (
        <div className="card-set">
            <div className="card">
                <div className="card__icon">
                    <RxAccessibility />
                    </div>
                <h2>Accessibility</h2>
                <p>Quae ex assumenda minus, in, tempora cumque perspiciatis, iure quasi necessitatibus qui iusto odit tenetur magni omnis repudiandae maiores. Pariatur porro vitae nesciunt non tempore? Amet necessitatibus veniam fugit ratione.</p>
                </div>
            <div className="card">
                <div className="card__icon">
                <RxRocket />
                </div>
                <h2>Performance</h2>
                <p>Quae ex assumenda minus, in, tempora cumque perspiciatis, iure quasi necessitatibus qui iusto odit tenetur magni omnis repudiandae maiores. Pariatur porro vitae nesciunt non tempore? Amet necessitatibus veniam fugit ratione.</p>
               </div>
            <div className="card">
                <div className="card__icon">
                    <RxPerson />
                </div>
                <h2>User Experience</h2>
                <p>Quae ex assumenda minus, in, tempora cumque perspiciatis, iure quasi necessitatibus qui iusto odit tenetur magni omnis repudiandae maiores. Pariatur porro vitae nesciunt non tempore? Amet necessitatibus veniam fugit ratione.</p>
              </div>
        </div>
    );
}

