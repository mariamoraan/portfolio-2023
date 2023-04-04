import { addDoc, collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { IProject } from "../../sections/landingPage/Projects";
import { IArticle } from "../../types/Article";
import { IOpinion } from "../../types/Opinion";
import { db } from '../firebase';

export const addArticle = async(article: IArticle) => {
    const docRef = await addDoc(collection(db, "articles"), article);
    console.log("Document written with ID: ", docRef.id)
};

export const addOpinion = async(opinion: IOpinion) => {
    const docRef = await addDoc(collection(db, "opinions"), opinion);
    console.log("Document written with ID: ", docRef.id)
}

export const addProject = async(project: IProject) => {
    const docRef = await addDoc(collection(db, "projects"), project);
    console.log("Document written with ID: ", docRef.id)
}

export const getArticles = async() =>  {
    const q = query(collection(db, "articles"), orderBy("date"), limit(3));
    const querySnapshot = await getDocs(q);
    let articles: IArticle[] = []
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        articles.push({title: doc.data().title, description: doc.data().description, date: doc.data().date ?? new Date(), link: doc.data().link})
    });
    return articles
}

export const getOpinions = async() =>  {
    const q = query(collection(db, "opinions"));
    const querySnapshot = await getDocs(q);
    let opinions: IOpinion[] = []
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        opinions.push({
            number: doc.id,
            name: doc.data().name,
            picture: doc.data().picture,
            position: doc.data().position,
            enterprise: doc.data().enterprise,
            opinion: doc.data().opinion,
        })
    });
    return opinions
}

export const getProjects = async() =>  {
    console.log("called")
    const q = query(collection(db, "projects"));
    const querySnapshot = await getDocs(q);
    let projects: IProject[] = []
    querySnapshot.forEach((doc) => {
        projects.push({
            image: doc.data().image,
            project:  doc.data().project,
            idea:  doc.data().idea,
            backgroundColor:  doc.data().backgroundColor,
            color:  doc.data().color,
            url:  doc.data().url,
        })
    });
    return projects
}