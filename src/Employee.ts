export class Employee {
    constructor(

        name?: string,
        contactNo?: number,
        email?: string,
        currentcompany?: string,
        joininglocation?: string,
        skill?: string,
        tower?: string,
        currentstatus?: string
       
    ) {}
}

export class feedbackifno{
    constructor(

        L1panelname?: string,
        L1averagerating?: string,
        L2panelname?: string,
        L2averagerating?: string
       
       
    ) {}
}

export class canditateexp{
    constructor(

        totalexp?: number,
        relevantexp?: number,
        levelbasedonexp?: string,
        proposedgrade?: string,
        banddeviation?: string
    ) {}
}

export class ctcdetailes{
    constructor(

        currentctc?: number,
        expectedctc?: number,
        proposedofferedctc?: number,
        proposedofferedctcinwords?: string,
        averagec1ctc?: number,
        hikepercent?: string,
        thresholdvalue?: number,

    ) {}
}
export class ctchistory{
    constructor(

        offeredctc?: number,
        holdingoffer?: number,
        createdby?: string,
        dateandtime?: string

    ) {}}