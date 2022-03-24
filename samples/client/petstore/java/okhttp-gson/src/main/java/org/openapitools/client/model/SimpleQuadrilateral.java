/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.openapitools.client.model.QuadrilateralInterface;
import org.openapitools.client.model.ShapeInterface;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * SimpleQuadrilateral
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SimpleQuadrilateral {
  public static final String SERIALIZED_NAME_SHAPE_TYPE = "shapeType";
  @SerializedName(SERIALIZED_NAME_SHAPE_TYPE)
  private String shapeType;

  public static final String SERIALIZED_NAME_QUADRILATERAL_TYPE = "quadrilateralType";
  @SerializedName(SERIALIZED_NAME_QUADRILATERAL_TYPE)
  private String quadrilateralType;

  public SimpleQuadrilateral() { 
  }

  public SimpleQuadrilateral shapeType(String shapeType) {
    
    this.shapeType = shapeType;
    return this;
  }

   /**
   * Get shapeType
   * @return shapeType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getShapeType() {
    return shapeType;
  }


  public void setShapeType(String shapeType) {
    this.shapeType = shapeType;
  }


  public SimpleQuadrilateral quadrilateralType(String quadrilateralType) {
    
    this.quadrilateralType = quadrilateralType;
    return this;
  }

   /**
   * Get quadrilateralType
   * @return quadrilateralType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getQuadrilateralType() {
    return quadrilateralType;
  }


  public void setQuadrilateralType(String quadrilateralType) {
    this.quadrilateralType = quadrilateralType;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SimpleQuadrilateral simpleQuadrilateral = (SimpleQuadrilateral) o;
    return Objects.equals(this.shapeType, simpleQuadrilateral.shapeType) &&
        Objects.equals(this.quadrilateralType, simpleQuadrilateral.quadrilateralType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(shapeType, quadrilateralType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SimpleQuadrilateral {\n");
    sb.append("    shapeType: ").append(toIndentedString(shapeType)).append("\n");
    sb.append("    quadrilateralType: ").append(toIndentedString(quadrilateralType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("shapeType");
    openapiFields.add("quadrilateralType");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("shapeType");
    openapiRequiredFields.add("quadrilateralType");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to SimpleQuadrilateral
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (SimpleQuadrilateral.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in SimpleQuadrilateral is not found in the empty JSON string", SimpleQuadrilateral.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!SimpleQuadrilateral.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `SimpleQuadrilateral` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : SimpleQuadrilateral.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!SimpleQuadrilateral.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'SimpleQuadrilateral' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<SimpleQuadrilateral> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(SimpleQuadrilateral.class));

       return (TypeAdapter<T>) new TypeAdapter<SimpleQuadrilateral>() {
           @Override
           public void write(JsonWriter out, SimpleQuadrilateral value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public SimpleQuadrilateral read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of SimpleQuadrilateral given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of SimpleQuadrilateral
  * @throws IOException if the JSON string is invalid with respect to SimpleQuadrilateral
  */
  public static SimpleQuadrilateral fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, SimpleQuadrilateral.class);
  }

 /**
  * Convert an instance of SimpleQuadrilateral to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

