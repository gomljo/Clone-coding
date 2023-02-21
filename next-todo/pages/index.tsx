// import React from "react";

// const index = () => {
//     return <div>hello typescript</div>;
// };
// export default index;

// import { NextPage } from "next";
// import styled from "styled-components";

// const Container = styled.div`
//     padding: 20px;
// `;

// const index: NextPage = () => {
//     return (
//     <Container>
//         <h1>hello Styled-components</h1>
//         <h2>hello Styled-components</h2>
//         <p>hello Styled-components</p>
//         <ul>
//             <li>hello Styled-components</li>
//         </ul>
//         <a>hello Styled-components</a>
//         <span>hello Styled-components</span> 
//     </Container>
//     );
// };

// export default index;

//* 리덕스 사용하기 전

// import React from "react";
// import { GetServerSideProps, NextPage } from "next";
// import TodoList from "../components/TodoList";
// import { TodoType } from "../types/todo";
// import { getTodosAPI } from "../lib/api/todo";

// interface IProps {
//*     todos: TodoType[];
// }

// const app: NextPage<IProps> = () => {
//     console.log(process.env, "클라이언트");
//     return <TodoList todos={[]} />;
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//     try {
//         const { data } = await getTodosAPI();
//         console.log(data)
//         console.log(process.env.NEXT_PUBLIC_API_URL, "서버");
//         return { props: {todos: data} };
//     }
//     catch (e) {
//         console.log(e);
//         return { props: {todos: []}};
//     }
// };

// export default app;

import { wrapper } from "../store";
import { todoActions } from "../store/todo";

import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

interface IProps {
     todos: TodoType[];
}

const app: NextPage = () => {
    console.log(process.env, "클라이언트");
    return <TodoList todos={[]} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        console.log(store);
        try {
            const { data } = await getTodosAPI();
            store.dispatch(todoActions.setTodo(data));
            // console.log(data)
            // console.log(process.env.NEXT_PUBLIC_API_URL, "서버");
            return { props: {} };
        }
        catch (e) {
            console.log(e);
            return { props: {}};
        }
    }
);

export default app;