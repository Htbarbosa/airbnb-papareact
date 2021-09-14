import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";


function Search ({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            <main className="flex">
                <section>
                    <p className="text-sm">300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        {/* custom style in ../../styles/global.css */}
                        <button className="button">Cancelation Flexibility</button>
                        <button className="button">Type of Place</button>
                        <button className="button">Price</button>
                        <button className="button">Rooms and Beds</button>
                        <button className="button">More filters</button>
                    </div>

                    <div className="flex flex-col">
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star} price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default Search;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());// your fetch function here 

    return {
        props: {
            searchResults,
        }
    };
};