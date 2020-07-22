import { Document, Model } from 'mongoose'

export interface IUser {
    id: Number;
    name: String;
    slack_name: String;
}

export interface IQuestion {
    id: Number;
    slug: String;
    content: String
    options: any
}

export interface IAnswer {
    id: Number;
    question_slug: String;
    text: null | String
}

export interface IReport extends Document {
    user: IUser
    questionsTemplateName: string
    answers: Array<IAnswer>
    completed: Boolean
    createdAt?: Date | String
    updatedAt?: Date | String
}

export interface IReportsModel extends Model<IReport> {
    startReportFromQuestions(user: IUser, questions: Array<IQuestion>): Promise<IReport>
    getLastReportForUser(user: IUser): Promise<IReport>
}


