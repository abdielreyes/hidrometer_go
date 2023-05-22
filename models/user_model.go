package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id      primitive.ObjectID `json:"id,omitempty"`
	Name    string             `json:"name,omitempty" validate:"required"`
	Phone   string             `json:"phone,omitempty" validate:"required"`
	Address string             `json:"address,omitempty" validate:"required"`
}
