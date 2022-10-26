class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: props.songs,
        }
        this.loadSongsFromServer();
    }

    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        this.setState({
            songs: songs,
        });


    }

    render() {
        if (!this.state.songs.length) {
            return (
                <div>
                    <h3> No Songs Yet!</h3>
                </div>
            )
        }
        // if there are songs in teh array
        const songList = this.state.songs.map(song => {
            return (
                <div>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            );
        })
        return (
            <div>
                <h1>My Favorite Songs!</h1>
                {songList}
            </div>

        );
    }
}

const init = () => {
    ReactDOM.render(<SongContainer songs={[]} />, document.getElementById('app'))
}

window.onload = init;