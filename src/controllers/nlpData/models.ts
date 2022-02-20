export interface IResponseData {
    data: IResponseItem[],
}

export interface IResponseItem {
    id: number,
    text: string,
    entities: IEntity[],
    mentioned_entity_properties: IMentionedEntityProperties[],
    relations: IRelation[]
};

export interface IEntity {
    label: string,
    start: number,
    text: string,
    type: string,
    end: number  
}

export interface IMentionedEntityProperties {
    entity: IEntity,
    type: string,
    label: string
}

export interface IRelation {
    label: string,
    subj: IEntity,
    type: string,
    obj: IEntity
}