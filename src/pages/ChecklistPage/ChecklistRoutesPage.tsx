/* eslint-disable consistent-return */
import { Button } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'antd';
import { get } from '../../Plugins/helpers';
import ChecklistContainer from '../../components/ChecklistContainer/ChecklistContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrementProgressTracker, incrementProgressTracker } from '../../auth/RouteReducer/routeReducer';
import {
 setArea, setPossibleProblems, setRoute, setTodo,
} from '../../auth/FetchedDataReducer/fetchedDataReducer';
import Loader from '../../components/Loader/Loader';
import ChecklistBody from '../../components/ChhecklistBody/ChecklistBody';
import CheckilistHeader from '../../components/ChecklistHeader/ChecklistHeader';

const ChecklistRoutesPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [form] = Form.useForm();
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const areas = useAppSelector((state) => state.fetchedData.Areas);

  const routeNumber = useAppSelector((state) => state.route.routeNumber);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const resRoutes = await get('routeData');
      const resAreas = await get('areasData');
      const resTodo = await get('todoData');
      const resProblems = await get('problemsData');

      dispatch(setPossibleProblems(resProblems.data));
      dispatch(setRoute(resRoutes.data));
      dispatch(setArea(resAreas.data));
      dispatch(setTodo(resTodo.data));
    })();
  }, []);

  React.useEffect(() => {
    setSearchParams(`route=${routeNumber}`, { replace: true });
  }, [routeNumber]);

  const paginate = (routeNumbers:number) => setCurrentPage(routeNumbers);

  // const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   console.log(e);
  // };

  const nextPage = () => {
    if (currentPage < areas.length) {
      paginate(currentPage + 1);
      dispatch(incrementProgressTracker());
    }
  };

  const previousPage = () => {
    dispatch(decrementProgressTracker());
    paginate(currentPage - 1);
    if (currentPage === 1) {
      paginate(currentPage);
    }
  };

  if (loading) {
    setTimeout(() => { setLoading(false); }, 1000);
      return (
        <Loader />
      );
    }
    return (
      <Form form={form}>
        <ChecklistContainer>
          <CheckilistHeader currentPage={currentPage} />
          <ChecklistBody currentPage={currentPage} />
          <Button type="submit" onClick={previousPage} variant="contained">Back</Button>
          <Button type="submit" onClick={nextPage} variant="contained">Next</Button>
        </ChecklistContainer>
      </Form>
        );
};
// on submit surenkama values,
// saugoma duombazej su async requestu, POST methodas,
// kai issaugota NextPage suveikia
export default ChecklistRoutesPage;
