import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

actor {
  let inquiries = Map.empty<Text, Inquiry>();

  type Inquiry = {
    name : Text;
    phone : Text;
    city : Text;
    childAge : Nat;
    courseInterest : Text;
  };

  module Inquiry {
    public func compare(inq1 : Inquiry, inq2 : Inquiry) : Order.Order {
      Text.compare(inq1.phone, inq2.phone);
    };
  };

  public shared ({ caller }) func submitInquiry(inquiry : Inquiry) : async () {
    if (inquiries.containsKey(inquiry.phone)) {
      Runtime.trap("Inquiry already exists with this phone number");
    };
    inquiries.add(inquiry.phone, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public shared ({ caller }) func deleteInquiry(phone : Text) : async () {
    if (inquiries.containsKey(phone)) {
      inquiries.remove(phone);
    } else {
      Runtime.trap("Inquiry not found for this phone number.");
    };
  };

  public query ({ caller }) func getInquiry(phone : Text) : async Inquiry {
    switch (inquiries.get(phone)) {
      case (null) { Runtime.trap("Inquiry not found.") };
      case (?inquiry) { inquiry };
    };
  };
};
