import React, {useState} from "react";
import PollItems from "../components/AddItems";

const Homepage = () => {

    const [createPoll, setCreatePoll] = useState(false);
    const [pollItems, setPollItems] = useState([]);
    const [addItem, setAddItem] = useState(false);

    const handlePollButton = () => {
        setCreatePoll(true);
    };

    const addPollItem = () => {
        setAddItem(true);
    };

    return (
        <section>
            {createPoll && 
            <div className="description">
                <h2>How Does Rank Choice Work?</h2>
                <p> If a poll option wins a majority of first-preference votes, it is declared the winner. If no poll option wins a majority of first-preference votes, the poll option with the fewest first-preference votes is eliminated. First-preference votes cast for the failed poll option are eliminated, lifting the second-preference choices indicated on those ballots. A new tally is conducted to determine whether any poll option has won a majority of the adjusted votes. The process is repeated until a poll option wins an outright majority.</p>
                <button onClick={handlePollButton}>Create Poll</button>
            </div>
            }

            <div className="poll-creation">
                <form>
                    <label htmlFor="question">Poll Question</label>
                    <input id="question" name="question" type="text" />

                    <button onClick={addPollItem}>Add Items</button>

                    {addItem && <PollItems itemArray={pollItems} />}
                    
                    <p>Poll must have at least 2 options added</p>

                </form>
            </div>
        </section>
    );
};

export default Homepage;