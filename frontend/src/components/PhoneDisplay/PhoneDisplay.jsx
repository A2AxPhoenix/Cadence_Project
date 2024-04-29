import './style.css';

export default function PhoneDisplay() {
    return(
        <div className="phonedisplay">
            <div className="phonedisplay-backdrop" />
            <div className="phonedisplay-screen">
                <div className="phonedisplay-aboutme-box">
                    <div className="phonedisplay-aboutme-text">About me</div>
                    <p className="phonedisplay-passionate-about">
                        Passionate about music—every genre speaks to me. From Beethoven to The Beatles, my soul dances to
                        every beat and melody. Life&#39;s better with tunes.
                    </p>
                </div>
                <div className="phonedisplay-favorite-genres-box">
                    <div className="phonedisplay-favorite-genres-text">Favorite Genres</div>
                    <div className="phonedisplay-favorite-genres-one">
                        <div className="phonedisplay-favorite-genres-one-text">Rock</div>
                    </div>
                    <div className="phonedisplay-favorite-genres-two">
                        <div className="phonedisplay-favorite-genres-two-text">Pop</div>
                    </div>
                    <div className="phonedisplay-favorite-genres-three">
                        <div className="phonedisplay-favorite-genres-three-text">Reggae</div>
                    </div>
                    <div className="phonedisplay-favorite-genres-four">
                        <div className="phonedisplay-favorite-genres-four-text">Hip-hop</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
