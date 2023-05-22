package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Admin struct {
	Id       primitive.ObjectID `json:"_id" bson:"_id"`
	Username string             `json:"username,omitempty" validate:"required"`
	Email    string             `json:"email,omitempty" validate:"required"`
	Password string             `json:"password,omitempty" validate:"required"`
}
