import "./App.css";
import { useParallax } from "react-scroll-parallax";
const App = () => {
    const cat = useParallax({
        scale: [0.5, 1, "easeInQuad"],
    });
    const dog = useParallax({
        scaleX: [1, 0, "easeInQuad"],
    });
    const rabbit = useParallax({
        scale: [1.5, 1, "easeInQuad"],
    });
    return (
        <div className="container-body">
            <div className="images-wrapper">
                <div className="cat">
                    <img
                        ref={cat.ref}
                        src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=200"
                    />
                </div>
                <div className="dog">
                    <img
                        ref={dog.ref}
                        src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=200"
                    />
                </div>
                <div className="rabbit">
                    <img
                        ref={rabbit.ref}
                        src="https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=200"
                    />
                </div>
            </div>
        </div>
    );
};
export default App;