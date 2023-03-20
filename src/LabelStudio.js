import React ,{ useState }from "react";
import ReactImageAnnotate from "react-image-annotate";
import {useSelector, useDispatch } from 'react-redux';

function LabelStudio() {

    const rects = useSelector(state => state.rects);
    const [annotation, setAnnotations] = useState([]);
    const [selectedAnnotation, setSelectedAnnotation] = useState(null);
    const dispatch = useDispatch();
    const taskDescription = "Label the objects in the image";
    const regionClsList=["Mouth", "Face", "Eyes"];
    const regionTagList=["tag1", "tag2", "tag3"];
    const onSubmit = (data) => {
        console.log(data);
    };
    const onExit = (data) => {
        console.log("YeS");
    };

    const handleAnnotationSelect = (annotation) => {
        
        setSelectedAnnotation("annotation");
    };
    
    const handleAnnotationCreate = (annotation) => {
        console.log("YES");
        // const { x, y, width, height } = annotation;
        // setAnnotations(prevAnnotations => [
        //   ...prevAnnotations,
        //   { type: 'rect', x, y, width, height }
        // ]);
        // dispatch({
        //     type: 'ADD_RECT',
        //     payload: {
        //       x,
        //       y,
        //       width,
        //       height
        //     }
        //   });
    };

return(
    <div>
        <ReactImageAnnotate
        labelImages
        taskDescription={taskDescription}
        regionClsList={regionClsList}
        regionTagList={regionTagList}
        images={[
        {
            src:
            "https://thooyabhoomi.com/wp-content/uploads/2022/02/velladuboti.webp",
            name: "Image 1",
            regions: [],
            id:1
        },
        {
            src:
            "https://images.newscientist.com/wp-content/uploads/2019/07/09172512/205582.jpg?width=900",
            name: "image2",
            regions: [],
            id: 2
        }

        ]}
        onSubmit={onSubmit}
        onExit={onExit}
        enabledTools={['select',  'create-box']}
        annotation={rects.map(({ x, y, width, height }, index) => ({
            type: 'rect',
            x,
            y,
            width,
            height,
            id: index,
          }))}
        onAnnotationCreate={handleAnnotationCreate}
        onAnnotationSelect={handleAnnotationSelect}
       
        />
     {selectedAnnotation && (
        <div>
          <p>x: {selectedAnnotation.x.toFixed(2)}</p>
          <p>y: {selectedAnnotation.y.toFixed(2)}</p>
          <p>width: {selectedAnnotation.width.toFixed(2)}</p>
          <p>height: {selectedAnnotation.height.toFixed(2)}</p>
        </div>
      )}       

    </div>
    
)
}
export default LabelStudio;