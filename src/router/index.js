
import {Route} from 'react-router';
import React from 'react';

import ButtonDemo from '../view/button/ButtonDemo';
import TabDemo from '../view/tab/TabDemo';
import AccordionDemo from '../view/accordion/AccordionDemo';
import TodolistDemo from '../view/todolist/TodolistDemo';
import TableDemo from '../view/table/TableDemo';

import App from '../App';

let routes = 	<Route path="/" component={App}>
					<Route path="buttonDemo" component={ButtonDemo} />
					<Route path="tabDemo" component={TabDemo} />
					<Route path="accordionDemo" component={AccordionDemo} />
					<Route path="todolistDemo" component={TodolistDemo} />
					<Route path="tableDemo" component={TableDemo} />
				</Route>;

export default routes