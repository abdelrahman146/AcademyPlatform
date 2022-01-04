import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { RequestStatus } from '../types/RequestStatus.enum';


@Entity()
export class Course {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar', // we need to change this to 'enum' in production
        enum: RequestStatus,
        default: RequestStatus.ONHOLD,
        nullable: false,
    })
    status: RequestStatus;

    @ManyToOne(() => User)
    moderator: User;

    @ManyToOne(() => User)
    teacher: User;

    @ManyToOne(() => Course)
    course: Course;
}