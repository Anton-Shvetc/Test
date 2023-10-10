import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../utils/actions";

const ExampleComponent = () => {
  const dispatch = useDispatch();

  // Получаем данные из хранилища Redux
  const data = useSelector((state) => state.data);
  const showButton = useSelector((state) => state.showButton);

  // useEffect(() => {
  //   // Загрузка данных при первой загрузке компонента
  //   dispatch(loadData());
  // }, [dispatch]);



  const handleLoadMore = () => {
    // Подгрузка дополнительных данных при клике на кнопку "Load more"
    // dispatch(loadMoreData());


        const response = fetch("https://layout.solvintech.ru/nuxt/api/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err);
          });
  };

  return (
    <div>
      {/* {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
  <button onClick={(handleLoadMore)}>Тест кнопка</button>
      {/* {showButton && <button onClick={handleLoadMore}>Load more</button>} */}
    </div>
  );
};

export default ExampleComponent;
