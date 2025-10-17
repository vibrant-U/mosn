#include "arpeggiatorComponent.h"

arpeggiatorComponent::arpeggiatorComponent (juce::AudioProcessorValueTreeState& vts)
    : valueTreeState (vts)
{
}

arpeggiatorComponent::~arpeggiatorComponent()
{
}

void arpeggiatorComponent::paint (juce::Graphics& g)
{
    g.fillAll (juce::Colours::blue);
    g.setColour (juce::Colours::white);
    g.drawText ("Arpeggiator Component", getLocalBounds(), juce::Justification::centred);
}

void arpeggiatorComponent::resized()
{
}
