import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {id:1,text: 'Черный'},
                    {id:2,text: 'Синий'},
                    {id:3,text: 'Красный'},
                    {id:4,text: 'Зеленый'}
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Санкт-Петербург',
                rightAnswerId: 1,
                answers: [
                    {id:1,text: '1703'},
                    {id:2,text: '1702'},
                    {id:3,text: '1861'},
                    {id:4,text: '500'}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
       // console.log(answerId)
        const question = this.state.quiz[this.state.activeQuestion]
        if(question.rightAnswerId === answerId) {
            const timeout = window.setTimeout(()=>{
                if(this.isQuizFinished()) {
                    alert('Finished');
                }else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }
                window.clearTimeout(timeout)
            },1000)

            
        }else {

        }
        
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz